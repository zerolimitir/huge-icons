import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTrolleyCrooked = (
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
            d='M5.859 5.905c-.373-1.37-1.795-2.167-3.164-1.806l-.886.234a.75.75 0 1 0 .382 1.45l.887-.234a1.09 1.09 0 0 1 1.334.75l2.77 10.175A2.493 2.493 0 0 1 8.607 16L5.86 5.905Zm5.134 13.458a2.488 2.488 0 0 0 .053-1.565l10.763-2.838a.75.75 0 1 1 .382 1.45l-11.198 2.953Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M11.061 17.853a2.5 2.5 0 1 1-4.828 1.294 2.5 2.5 0 0 1 4.828-1.294ZM8.27 7.146a1.804 1.804 0 0 1 1.3-2.213l7.094-1.871c.979-.258 1.986.314 2.248 1.278l1.9 6.981a1.804 1.804 0 0 1-1.297 2.213l-7.094 1.871c-.98.259-1.986-.313-2.249-1.277l-1.9-6.982Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M15.44 6.19a.75.75 0 0 1-.534.917l-1.773.467a.75.75 0 0 1-.382-1.45l1.773-.468a.75.75 0 0 1 .917.534Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrolleyCrooked);
export default ForwardRef;
