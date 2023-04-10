import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStethoscope = (
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
            d='M10.75 2a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0c.304.228.5.591.5 1v3a4.25 4.25 0 0 1-8.5 0V5c0-.409.196-.772.5-1a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-1.5 0v.354A2.751 2.751 0 0 0 1.25 5v3a5.751 5.751 0 0 0 5 5.701v4.549a4.5 4.5 0 1 0 9 0v-5.5a2 2 0 1 1 4 0V14a.8.8 0 0 0 .013.14 2 2 0 1 0 1.474 0 .752.752 0 0 0 .013-.14v-1.25a3.5 3.5 0 1 0-7 0v5.5a3 3 0 1 1-6 0v-4.549a5.75 5.75 0 0 0 5-5.701V5a2.75 2.75 0 0 0-2-2.646V2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStethoscope);
export default ForwardRef;
