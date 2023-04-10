import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapFlag = (
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
            strokeWidth={1.5}
            d='M7.098 6.878c-1.867.21-4.14 1.757-5.278 2.617a1.86 1.86 0 0 0-.722 1.495v9.67c0 .853 1.028 1.348 1.736.872 1.21-.813 2.853-1.736 4.264-1.894 3.318-.371 4.682 3.562 8 3.19 1.867-.209 4.14-1.757 5.278-2.617a1.86 1.86 0 0 0 .722-1.495v-9.67c0-.853-1.028-1.348-1.736-.872-1.21.813-2.852 1.736-4.264 1.894-3.318.372-4.682-3.561-8-3.19Z'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M15 13.96v-8m0-3.917h6l-1 2.084 1 2.083h-6V2.043Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapFlag);
export default ForwardRef;
