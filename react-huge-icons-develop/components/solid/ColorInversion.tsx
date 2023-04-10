import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgColorInversion = (
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
            d='M7.45 6.824c-1.568 1.88-2.7 4.214-2.7 6.176a7.251 7.251 0 0 0 6.5 7.212V3.883c-.401.13-.857.354-1.35.683-.82.545-1.674 1.329-2.45 2.258Zm1.62-3.507c.945-.63 1.967-1.067 2.93-1.067.963 0 1.985.438 2.931 1.067.961.639 1.92 1.527 2.77 2.546 1.68 2.014 3.049 4.68 3.049 7.137a8.75 8.75 0 1 1-17.5 0c0-2.457 1.368-5.123 3.05-7.137.85-1.02 1.808-1.907 2.77-2.546Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgColorInversion);
export default ForwardRef;
