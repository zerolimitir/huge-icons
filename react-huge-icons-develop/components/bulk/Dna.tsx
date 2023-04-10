import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgDna = (
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
            d='M6.341 2C7.165 4.33 9.387 6 12 6h.341A6.003 6.003 0 0 0 18 2H6.341ZM12 18a6.002 6.002 0 0 0-5.659 4H18a6.003 6.003 0 0 0-5.659-4H12Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.868 13.259a6.026 6.026 0 0 0 0-2.518.948.948 0 0 1-.128.009H6.577a.94.94 0 0 1-.105-.006 6.024 6.024 0 0 0 0 2.512.94.94 0 0 1 .105-.006H17.74c.043 0 .086.003.128.009Zm-.534 1.491H7.007a6 6 0 0 0 5.164 3.248 6 6 0 0 0 5.163-3.248ZM12.17 6.002a6 6 0 0 1 5.163 3.248H7.007a6 6 0 0 1 5.164-3.248Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgDna);
export default ForwardRef;
