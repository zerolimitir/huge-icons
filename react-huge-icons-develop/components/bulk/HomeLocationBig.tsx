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
            d='M21 17.986v-8.07c0-1.239-.57-2.408-1.544-3.169l-5-3.902a3.99 3.99 0 0 0-4.912 0l-5 3.902A4.018 4.018 0 0 0 3 9.916v8.07A4.007 4.007 0 0 0 7 22h10c2.21 0 4-1.797 4-4.014Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 22c2 0 5-4.239 5-7a5 5 0 0 0-10 0c0 2.761 3 7 5 7Zm0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeLocationBig);
export default ForwardRef;
