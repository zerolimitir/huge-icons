import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLifebuoy = (
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
            d='M22 16V8a5.981 5.981 0 0 0-1.757-4.243l-5.415 5.415A3.987 3.987 0 0 1 16 12a3.987 3.987 0 0 1-1.172 2.828l5.415 5.415A5.981 5.981 0 0 0 22 16ZM2 8v8c0 1.657.672 3.157 1.757 4.243l5.415-5.415A3.988 3.988 0 0 1 8 12c0-1.105.448-2.105 1.172-2.828L3.757 3.757A5.981 5.981 0 0 0 2 8Z'
        />
        <path
            fill='currentColor'
            d='M16 2H8a5.981 5.981 0 0 0-4.243 1.757l5.415 5.415A3.987 3.987 0 0 1 12 8c1.104 0 2.104.448 2.828 1.172l5.415-5.415A5.981 5.981 0 0 0 16 2ZM8 22h8a5.981 5.981 0 0 0 4.243-1.757l-5.415-5.415A3.987 3.987 0 0 1 12 16a3.987 3.987 0 0 1-2.828-1.172l-5.415 5.415A5.981 5.981 0 0 0 8 22Z'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLifebuoy);
export default ForwardRef;
