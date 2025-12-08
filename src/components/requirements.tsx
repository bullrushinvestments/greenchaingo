import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
      setRequirements(response.data.requirements);
      setLoading(false);
    } catch (err) {
      setError('Failed to load requirements.');
      setLoading(false);
    }
  };

  const { register, handleSubmit, reset } = useForm<Requirement>();

  const onSubmit = async (data: Requirement) => {
    try {
      await axios.post('/api/requirements', data);
      fetchRequirements();
      reset();
    } catch (err) {
      setError('Failed to add new requirement.');
    }
  };

  return (
    <div className="p-6">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div role="alert" aria-live="assertive" tabIndex={0}>
          {error}
        </div>
      ) : (
        <>
          <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <input
              type="hidden"
              {...register('id', { required: true })}
            />
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                id="title"
                name="title"
                placeholder="Enter requirement title"
                {...register('title', { required: true })}
                className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Enter requirement description"
                {...register('description', { required: true })}
                className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
            >
              Add Requirement
            </button>
          </form>

          <div className="mt-6">
            {requirements.map((requirement) => (
              <div key={requirement.id} className="p-4 border rounded bg-white mb-2">
                <h3 className="text-lg font-medium">{requirement.title}</h3>
                <p>{requirement.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

interface Requirement {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
      setRequirements(response.data.requirements);
      setLoading(false);
    } catch (err) {
      setError('Failed to load requirements.');
      setLoading(false);
    }
  };

  const { register, handleSubmit, reset } = useForm<Requirement>();

  const onSubmit = async (data: Requirement) => {
    try {
      await axios.post('/api/requirements', data);
      fetchRequirements();
      reset();
    } catch (err) {
      setError('Failed to add new requirement.');
    }
  };

  return (
    <div className="p-6">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div role="alert" aria-live="assertive" tabIndex={0}>
          {error}
        </div>
      ) : (
        <>
          <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <input
              type="hidden"
              {...register('id', { required: true })}
            />
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                id="title"
                name="title"
                placeholder="Enter requirement title"
                {...register('title', { required: true })}
                className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Enter requirement description"
                {...register('description', { required: true })}
                className="mt-1 block w-full rounded-md shadow-sm border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
            >
              Add Requirement
            </button>
          </form>

          <div className="mt-6">
            {requirements.map((requirement) => (
              <div key={requirement.id} className="p-4 border rounded bg-white mb-2">
                <h3 className="text-lg font-medium">{requirement.title}</h3>
                <p>{requirement.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GatherRequirements;