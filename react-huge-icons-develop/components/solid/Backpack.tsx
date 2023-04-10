import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBackpack = (
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
            fillRule='evenodd'
            d='M8.25 4A2.75 2.75 0 0 1 11 1.25h2A2.75 2.75 0 0 1 15.75 4v.666A6 6 0 0 1 19 10v4.79c-2.633-1.01-4.802-1.54-7-1.54-2.198 0-4.367.53-7 1.54V10a6 6 0 0 1 3.25-5.334V4Zm6 0v.13A6.024 6.024 0 0 0 13 4h-2a6.05 6.05 0 0 0-1.25.13V4c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25ZM12 14.75c2.081 0 4.195.531 7 1.652V18a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-1.598c2.805-1.12 4.919-1.652 7-1.652Zm-1-6.5a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5h-2ZM2 14a2 2 0 0 1 2-2v8a2 2 0 0 1-2-2v-4Zm18-2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2v-8Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBackpack);
export default ForwardRef;
