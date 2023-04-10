import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgRoofHomeSetting = (
    { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        aria-labelledby={titleId}
        {...props}>
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fill='currentColor'
            d='M7.82 22h8.36c2.31 0 4.18-1.786 4.18-3.99v-4.877c0-.708.296-1.387.82-1.888 1.216-1.16 1.058-3.083-.332-4.048l-6.39-4.434a4.343 4.343 0 0 0-4.917 0L3.153 7.197c-1.391.965-1.55 2.888-.333 4.048.524.5.82 1.18.82 1.888v4.878C3.64 20.214 5.51 22 7.82 22Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.576 10h.848c.469 0 .849.358.849.8 0 .506.54.827.985.585l.045-.024c.406-.221.925-.09 1.159.293l.424.692c.235.383.095.872-.31 1.093a.639.639 0 0 0 0 1.122c.405.22.544.71.31 1.093l-.424.692c-.234.383-.753.514-1.16.293l-.044-.024a.666.666 0 0 0-.985.585c0 .442-.38.8-.849.8h-.848c-.469 0-.849-.358-.849-.8a.666.666 0 0 0-.985-.585l-.045.024c-.406.221-.925.09-1.159-.293l-.424-.692c-.234-.383-.095-.872.31-1.093a.639.639 0 0 0 0-1.122.776.776 0 0 1-.31-1.093l.424-.692c.234-.383.753-.514 1.16-.293l.044.024a.666.666 0 0 0 .985-.585c0-.442.38-.8.849-.8ZM12 15.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoofHomeSetting);
export default ForwardRef;
