import React, { useState, useRef, useEffect } from 'react';
import type { ColumnDef } from '../types';

export interface EditableCellProps<T = any> {
  value: any;
  row: T;
  column: ColumnDef<T>;
  onCommit: (newValue: any) => void;
  onCancel: () => void;
  className?: string;
}

export function EditableCell<T = any>({
  value,
  row,
  column,
  onCommit,
  onCancel,
  className,
}: EditableCellProps<T>) {
  const [editValue, setEditValue] = useState<any>(value ?? '');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | HTMLSelectElement>(null);

  useEffect(() => {
    // Auto-focus on mount
    inputRef.current?.focus();
    if (inputRef.current && 'select' in inputRef.current && column.editType !== 'select') {
      (inputRef.current as HTMLInputElement).select();
    }
  }, [column.editType]);

  const validate = (val: any): boolean => {
    if (!column.validateEdit) return true;
    const result = column.validateEdit(val, row);
    if (result === true) {
      setError(null);
      return true;
    }
    if (typeof result === 'string') {
      setError(result);
      return false;
    }
    // result is false
    setError('Invalid value');
    return false;
  };

  const handleCommit = () => {
    const finalValue = column.editType === 'number' ? Number(editValue) : editValue;
    if (validate(finalValue)) {
      onCommit(finalValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommit();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onCancel();
    }
  };

  const handleBlur = () => {
    handleCommit();
  };

  const editType = column.editType ?? 'text';

  if (editType === 'select') {
    return (
      <div style={{ position: 'relative', width: '100%' }}>
        <select
          ref={inputRef as React.RefObject<HTMLSelectElement>}
          value={editValue}
          onChange={(e) => {
            setEditValue(e.target.value);
            setError(null);
          }}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          className={`edit-input ${error ? 'error' : ''} ${className ?? ''}`}
        >
          {(column.editOptions ?? []).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {error && <div className="edit-error-message">{error}</div>}
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type={editType}
        value={editValue}
        onChange={(e) => {
          setEditValue(e.target.value);
          setError(null);
        }}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        className={`edit-input ${error ? 'error' : ''} ${className ?? ''}`}
      />
      {error && <div className="edit-error-message">{error}</div>}
    </div>
  );
}
