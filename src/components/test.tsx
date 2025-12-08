import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assuming you have a GraphQL mutation for creating tests

interface Test {
  id: string;
  name: string;
  description: string;
}

interface CreateTestInput {
  name: string;
  description?: string;
}

interface WriteTestsProps {}

const WriteTests: React.FC<WriteTestsProps> = () => {
  const [createTest] = useMutation(CREATE_TEST);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateTestInput>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<CreateTestInput> = async (data) => {
    try {
      setLoading(true);
      await createTest({ variables: data });
      reset();
    } catch (error) {
      console.error('Failed to create test:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Test Name</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            aria-label="Enter test name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <p className="text-red-600 text-xs mt-1">{errors.name?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            {...register('description')}
            aria-label="Enter test description"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${loading ? 'bg-gray-300' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'} text-white`}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { CREATE_TEST } from './graphql/mutations'; // Assuming you have a GraphQL mutation for creating tests

interface Test {
  id: string;
  name: string;
  description: string;
}

interface CreateTestInput {
  name: string;
  description?: string;
}

interface WriteTestsProps {}

const WriteTests: React.FC<WriteTestsProps> = () => {
  const [createTest] = useMutation(CREATE_TEST);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<CreateTestInput>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<CreateTestInput> = async (data) => {
    try {
      setLoading(true);
      await createTest({ variables: data });
      reset();
    } catch (error) {
      console.error('Failed to create test:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Test Name</label>
          <input
            id="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            aria-label="Enter test name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <p className="text-red-600 text-xs mt-1">{errors.name?.message}</p>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            {...register('description')}
            aria-label="Enter test description"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${loading ? 'bg-gray-300' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'} text-white`}
        >
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;