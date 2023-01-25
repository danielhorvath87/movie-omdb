import {
  FormControl,
  FormHelperText,
  InputAdornment,
  TextField as Component,
  TextFieldProps,
  Typography,
  useTheme
} from '@mui/material';
import clsx from 'clsx';
import { debounce } from 'lodash';
import { FC, useMemo, useRef } from 'react';
import Icon from './Icon';

type Props = TextFieldProps & {
  label?: string;
  required?: boolean;
  error?: boolean;
  wait?: number;
  helperText?: string;
  onChange?: (event: { target: { value: string } }) => void;
};

const TextField: FC<Props> = ({
  label,
  required,
  defaultValue = '',
  error,
  onChange,
  wait = 250,
  helperText,
  ...rest
}) => {
  const onExecute = debounce((event) => onChange && onChange(event), wait);
  const inputEl = useRef<TextFieldProps>();
  const theme = useTheme();

  useMemo(() => {
    if (inputEl.current) {
      inputEl.current.value = defaultValue;
    }
  }, [defaultValue]);

  return (
    <FormControl variant="outlined" fullWidth>
      <Typography
        role="label"
        variant="body1"
        component="label"
        marginBottom={(label && theme.spacing(1)) || theme.spacing(0)}
        fontSize={theme.typography.pxToRem(14)}
        fontWeight={rest.className && rest?.className.includes('isBuffered') ? 600 : 400 || 400}
        color={clsx(error && theme.palette.error.main, [
          error && theme.palette.error.main,
          rest?.className?.includes('isBuffered') && theme.palette.success.main,
          theme.palette.text.primary,
        ])}
      >
        {label}
        {label && required && <> * </>}
      </Typography>
      <Component
        inputRef={inputEl}
        variant="outlined"
        defaultValue={defaultValue}
        onChange={(e) => onExecute(e)}
        error={error || false}
        size={'small'}
        InputProps={{
          startAdornment: rest.type === 'search' && <InputAdornment position="start"><Icon icon={'search'} /></InputAdornment>,
        }}
        {...rest}
      />

      {required && (
        <FormHelperText
          role="helperText"
          className={clsx(error && 'Mui-error')}
          sx={{
            marginTop: 1,
            marginBottom: theme.spacing(1),
            marginLeft: 0,
            marginRight: 0,
            paddingLeft: theme.spacing(1),
            fontSize: theme.typography.pxToRem(12),
            lineHeight: theme.typography.pxToRem(16),
            color: theme.palette.text.primary,
            borderStyle: 'solid',
            borderColor: '#263238',
            borderWidth: 0,
            borderLeftWidth: '3px',

            '&.Mui-error': {
              marginTop: theme.spacing(1),
              borderColor: theme.palette.error.main,
            },
          }}
        >
          Mandatory field
        </FormHelperText>
      )}

      {helperText && (
        <FormHelperText
          role="helperText"
          sx={{
            marginTop: 0,
            marginBottom: theme.spacing(1),
            marginLeft: 0,
            marginRight: 0,
            paddingLeft: theme.spacing(1),
            fontSize: theme.typography.pxToRem(12),
            lineHeight: theme.typography.pxToRem(16),
            color: theme.palette.text.primary,
            borderStyle: 'solid',
            borderColor: '#263238',
            borderWidth: 0,
            borderLeftWidth: '3px',
          }}
        >
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default TextField;
