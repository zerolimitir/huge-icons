import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUploadCircle = (
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
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='m8 6 4-4m0 0 4 4m-4-4v14'
        />
        <path
            fill='currentColor'
            d='M18.83 8.53a.75.75 0 0 0-1.17.94l1.17-.94Zm-12.49.94a.75.75 0 1 0-1.17-.94l1.17.94ZM19.25 14A7.25 7.25 0 0 1 12 21.25v1.5A8.75 8.75 0 0 0 20.75 14h-1.5ZM12 21.25A7.25 7.25 0 0 1 4.75 14h-1.5A8.75 8.75 0 0 0 12 22.75v-1.5Zm5.66-11.78A7.216 7.216 0 0 1 19.25 14h1.5a8.717 8.717 0 0 0-1.92-5.47l-1.17.94ZM4.75 14c0-1.715.595-3.29 1.59-4.53l-1.17-.94A8.716 8.716 0 0 0 3.25 14h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUploadCircle);
export default ForwardRef;
