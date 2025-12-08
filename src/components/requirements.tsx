import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw from 'twin.macro';

interface IRequirement {
  name: string;
  description: string;
}

interface IGatherRequirementsForm {
  businessName: string;
  websitePurpose: string;
  targetAudience: string;
  featuresRequired: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IGatherRequirementsForm>();

  const onSubmit: SubmitHandler<IGatherRequirementsForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setError(null);
      reset();
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={tw`p-8 max-w-md mx-auto bg-white rounded-lg shadow-md`}>
      {error && <div role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</div>}
      <div>
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          id="businessName"
          type="text"
          {...register('businessName', { required: 'This is required' })}
          className={tw`mt-1 block w-full rounded-md shadow-sm`}
        />
        {errors.businessName && (
          <p role="alert" aria-live="polite" className="mt-2 text-red-500">{errors.businessName.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="websitePurpose" className="block text-sm font-medium text-gray-700">Website Purpose</label>
        <textarea
          id="websitePurpose"
          {...register('websitePurpose', { required: 'This is required' })}
          className={tw`mt-1 block w-full rounded-md shadow-sm`}
        />
        {errors.websitePurpose && (
          <p role="alert" aria-live="polite" className="mt-2 text-red-500">{errors.websitePurpose.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">Target Audience</label>
        <input
          id="targetAudience"
          type="text"
          {...register('targetAudience', { required: 'This is required' })}
          className={tw`mt-1 block w-full rounded-md shadow-sm`}
        />
        {errors.targetAudience && (
          <p role="alert" aria-live="polite" className="mt-2 text-red-500">{errors.targetAudience.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="featuresRequired" className="block text-sm font-medium text-gray-700">Features Required</label>
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="flex items-center mt-2">
            <input
              id={`feature-${i}`}
              type="text"
              {...register(`featuresRequired[${i}].name`, { required: 'This is required' })}
              className={tw`mt-1 block w-full rounded-md shadow-sm`}
            />
            <textarea
              id={`description-${i}`}
              {...register(`featuresRequired[${i}].description`, { required: 'This is required' })}
              className={tw`ml-2 mt-1 block w-full rounded-md shadow-sm`}
            />
          </div>
        ))}
      </div>

      <button type="submit" disabled={loading} className={tw`mt-6 inline-flex items-center px-4 py-2 bg-blue-600 text-white border border-transparent rounded-md font-semibold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto`}>
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import tw from 'twin.macro';

interface IRequirement {
  name: string;
  description: string;
}

interface IGatherRequirementsForm {
  businessName: string;
  websitePurpose: string;
  targetAudience: string;
  featuresRequired: IRequirement[];
}

const GatherRequirements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<IGatherRequirementsForm>();

  const onSubmit: SubmitHandler<IGatherRequirementsForm> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setError(null);
      reset();
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} css={tw`p-8 max-w-md mx-auto bg-white rounded-lg shadow-md`}>
      {error && <div role="alert" aria-live="assertive" className="text-red-500 mb-4">{error}</div>}
      <div>
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
        <input
          id="businessName"
          type="text"
          {...register('businessName', { required: 'This is required' })}
          className={tw`mt-1 block w-full rounded-md shadow-sm`}
        />
        {errors.businessName && (
          <p role="alert" aria-live="polite" className="mt-2 text-red-500">{errors.businessName.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="websitePurpose" className="block text-sm font-medium text-gray-700">Website Purpose</label>
        <textarea
          id="websitePurpose"
          {...register('websitePurpose', { required: 'This is required' })}
          className={tw`mt-1 block w-full rounded-md shadow-sm`}
        />
        {errors.websitePurpose && (
          <p role="alert" aria-live="polite" className="mt-2 text-red-500">{errors.websitePurpose.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700">Target Audience</label>
        <input
          id="targetAudience"
          type="text"
          {...register('targetAudience', { required: 'This is required' })}
          className={tw`mt-1 block w-full rounded-md shadow-sm`}
        />
        {errors.targetAudience && (
          <p role="alert" aria-live="polite" className="mt-2 text-red-500">{errors.targetAudience.message}</p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="featuresRequired" className="block text-sm font-medium text-gray-700">Features Required</label>
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="flex items-center mt-2">
            <input
              id={`feature-${i}`}
              type="text"
              {...register(`featuresRequired[${i}].name`, { required: 'This is required' })}
              className={tw`mt-1 block w-full rounded-md shadow-sm`}
            />
            <textarea
              id={`description-${i}`}
              {...register(`featuresRequired[${i}].description`, { required: 'This is required' })}
              className={tw`ml-2 mt-1 block w-full rounded-md shadow-sm`}
            />
          </div>
        ))}
      </div>

      <button type="submit" disabled={loading} className={tw`mt-6 inline-flex items-center px-4 py-2 bg-blue-600 text-white border border-transparent rounded-md font-semibold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto`}>
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;