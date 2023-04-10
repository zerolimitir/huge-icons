import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgViewOff = (
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
            strokeWidth={1.5}
            d='m4 4 16 16m-6-5.764A3 3 0 0 1 9.764 10'
        />
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeWidth={1.5}
            d='M19.608 15.608a22.453 22.453 0 0 0 1.522-1.461 3.085 3.085 0 0 0 0-4.294C19.174 7.795 15.816 5 12 5c-.891 0-1.758.153-2.587.413M6.5 6.803c-1.459.931-2.702 2.074-3.63 3.05a3.085 3.085 0 0 0 0 4.294C4.825 16.205 8.184 19 12 19c1.868 0 3.627-.67 5.165-1.596'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgViewOff);
export default ForwardRef;
