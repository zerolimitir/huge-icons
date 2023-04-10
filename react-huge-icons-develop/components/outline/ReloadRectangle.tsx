import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgReloadRectangle = (
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
            d='m14.58 8.002-.367.654a.75.75 0 0 0 1.065-.93l-.697.276Zm-5.16 7.996.368-.654a.75.75 0 0 0-1.066.93l.697-.276Zm5.063-10.275a.75.75 0 0 0-1.394.554l1.394-.554ZM9.517 18.277a.75.75 0 0 0 1.394-.554l-1.394.554Zm8.038-7.682a.75.75 0 0 0-1.443.41l1.443-.41Zm-11.11 2.81a.75.75 0 1 0 1.443-.41l-1.443.41ZM16.25 12c0 2.115-1.853 3.917-4.25 3.917v1.5c3.126 0 5.75-2.378 5.75-5.417h-1.5Zm-8.5 0c0-2.115 1.853-3.917 4.25-3.917v-1.5c-3.126 0-5.75 2.378-5.75 5.417h1.5ZM12 8.083c.814 0 1.57.21 2.213.573l.736-1.307A5.997 5.997 0 0 0 12 6.583v1.5Zm0 7.834c-.814 0-1.57-.21-2.212-.573l-.737 1.307a5.997 5.997 0 0 0 2.949.766v-1.5Zm3.278-8.192-.795-2.002-1.394.554.795 2.002 1.394-.554Zm-6.556 8.55.795 2.002 1.394-.554-.795-2.002-1.394.554Zm7.39-5.27c.09.317.138.65.138.995h1.5c0-.485-.068-.956-.195-1.405l-1.443.41Zm-8.224 1.99A3.63 3.63 0 0 1 7.75 12h-1.5c0 .485.068.956.195 1.405l1.443-.41Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M18 2H6a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReloadRectangle);
export default ForwardRef;
