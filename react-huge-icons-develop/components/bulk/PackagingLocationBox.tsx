import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPackagingLocationBox = (
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
            d='M13 16a2 2 0 0 1 2-2h1.002c.603-1.32.998-2.687.998-4 0-5.523-3.134-8-7-8s-7 2.477-7 8c0 3.281 2.47 6.899 4.476 9.295 1.341 1.602 3.707 1.602 5.048 0 .156-.187.315-.38.476-.582V16Z'
            opacity={0.4}
        />
        <circle cx={10} cy={9} r={3} fill='currentColor' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4Zm3 2.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPackagingLocationBox);
export default ForwardRef;
