import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgHomeLocationBig = (
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
            d='M21 9.916v8.07A4.007 4.007 0 0 1 17 22h-5c2 0 5-4.239 5-7a5 5 0 0 0-10 0c0 2.761 3 7 5 7H7c-2.21 0-4-1.797-4-4.014v-8.07c0-1.239.57-2.408 1.544-3.169l5-3.902a3.99 3.99 0 0 1 4.912 0l5 3.902A4.019 4.019 0 0 1 21 9.916ZM13.5 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeLocationBig);
export default ForwardRef;
