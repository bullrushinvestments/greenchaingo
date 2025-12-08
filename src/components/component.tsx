import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Typography, Box, InputLabel, Select, MenuItem } from '@mui/material';

interface BusinessSpec {
  name: string;
  description: string;
  industry: string;
  features: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>({
    defaultValues: {
      name: '',
      description: '',
      industry: 'Select Industry',
      features: []
    }
  });

  useEffect(() => {
    if (error) {
      // Reset error state after a timeout
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const onSubmit = async (data: BusinessSpec) => {
    setLoading(true);
    try {
      await axios.post('/api/business-specification', data);
      reset();
    } catch (err) {
      setError('Failed to create business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: 'Business Name is required.',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            id="business-name"
            label="Business Name"
            error={!!errors.name}
            helperText={errors.name?.message}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            aria-label="business name input"
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={{ required: 'Description is required.' }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            multiline
            rows={4}
            id="business-description"
            label="Business Description"
            error={!!errors.description}
            helperText={errors.description?.message}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            aria-label="business description input"
          />
        )}
      />

      <InputLabel htmlFor="industry-select-outlined" id="industry-label">Industry</InputLabel>
      <Controller
        name="industry"
        control={control}
        rules={{ required: 'Industry is required.' }}
        render={({ field }) => (
          <Select
            {...field}
            labelId="industry-label"
            id="industry-select-outlined"
            displayEmpty
            value={field.value}
            onChange={(e) => field.onChange(e)}
            inputProps={{
              name: 'industry',
              id: 'outlined-industry'
            }}
            error={!!errors.industry}
          >
            <MenuItem disabled value="">
              <em>Select Industry</em>
            </MenuItem>
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="Healthcare">Healthcare</MenuItem>
            {/* Add more industries as needed */}
          </Select>
        )}
      />

      <Controller
        name="features"
        control={control}
        rules={{ required: 'At least one feature is required.' }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            id="business-features"
            label="Features (comma separated)"
            error={!!errors.features}
            helperText={errors.features?.message}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            aria-label="business features input"
          />
        )}
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          type="submit"
          disabled={loading}
          fullWidth
          variant="contained"
          color="primary"
          aria-label="create business specification button"
        >
          {loading ? (
            <>
              Creating Business Specification...
              <CircularProgress size={24} sx={{ ml: 1 }} />
            </>
          ) : 'Create'}
        </Button>
      </Box>

      {error && (
        <Typography variant="caption" color="red">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Typography, Box, InputLabel, Select, MenuItem } from '@mui/material';

interface BusinessSpec {
  name: string;
  description: string;
  industry: string;
  features: string[];
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { control, handleSubmit, formState: { errors }, reset } = useForm<BusinessSpec>({
    defaultValues: {
      name: '',
      description: '',
      industry: 'Select Industry',
      features: []
    }
  });

  useEffect(() => {
    if (error) {
      // Reset error state after a timeout
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const onSubmit = async (data: BusinessSpec) => {
    setLoading(true);
    try {
      await axios.post('/api/business-specification', data);
      reset();
    } catch (err) {
      setError('Failed to create business specification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: 'Business Name is required.',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            id="business-name"
            label="Business Name"
            error={!!errors.name}
            helperText={errors.name?.message}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            aria-label="business name input"
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={{ required: 'Description is required.' }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            multiline
            rows={4}
            id="business-description"
            label="Business Description"
            error={!!errors.description}
            helperText={errors.description?.message}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            aria-label="business description input"
          />
        )}
      />

      <InputLabel htmlFor="industry-select-outlined" id="industry-label">Industry</InputLabel>
      <Controller
        name="industry"
        control={control}
        rules={{ required: 'Industry is required.' }}
        render={({ field }) => (
          <Select
            {...field}
            labelId="industry-label"
            id="industry-select-outlined"
            displayEmpty
            value={field.value}
            onChange={(e) => field.onChange(e)}
            inputProps={{
              name: 'industry',
              id: 'outlined-industry'
            }}
            error={!!errors.industry}
          >
            <MenuItem disabled value="">
              <em>Select Industry</em>
            </MenuItem>
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="Healthcare">Healthcare</MenuItem>
            {/* Add more industries as needed */}
          </Select>
        )}
      />

      <Controller
        name="features"
        control={control}
        rules={{ required: 'At least one feature is required.' }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            id="business-features"
            label="Features (comma separated)"
            error={!!errors.features}
            helperText={errors.features?.message}
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            aria-label="business features input"
          />
        )}
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          type="submit"
          disabled={loading}
          fullWidth
          variant="contained"
          color="primary"
          aria-label="create business specification button"
        >
          {loading ? (
            <>
              Creating Business Specification...
              <CircularProgress size={24} sx={{ ml: 1 }} />
            </>
          ) : 'Create'}
        </Button>
      </Box>

      {error && (
        <Typography variant="caption" color="red">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default CreateBusinessSpecification;