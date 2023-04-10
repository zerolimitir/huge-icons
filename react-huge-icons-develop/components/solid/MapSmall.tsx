import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMapSmall = (
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
            d='M12 17c2 0 6-4.686 6-8A6 6 0 0 0 6 9c0 3.314 4 8 6 8Zm0-6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.012 15.094A4 4 0 0 0 4.8 16.439l-1.067 1.28C2.648 19.023 3.574 21 5.27 21h13.46c1.696 0 2.622-1.978 1.537-3.28L19.2 16.44a4 4 0 0 0-2.211-1.346l-.06.077c-.689.873-1.467 1.66-2.249 2.246-.723.54-1.678 1.083-2.68 1.083-1.002 0-1.957-.542-2.68-1.083-.782-.585-1.56-1.373-2.248-2.246l-.06-.077Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapSmall);
export default ForwardRef;
