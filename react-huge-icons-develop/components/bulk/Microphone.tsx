import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMicrophone = (
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
        <path fill='currentColor' d='M8 6a4 4 0 1 1 8 0v6a4 4 0 0 1-8 0V6Z' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M5.75 11a.75.75 0 0 0-1.5 0v1a7.751 7.751 0 0 0 7 7.714v1.536H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25v-1.536a7.751 7.751 0 0 0 7-7.714v-1a.75.75 0 0 0-1.5 0v1a6.25 6.25 0 1 1-12.5 0v-1Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMicrophone);
export default ForwardRef;
