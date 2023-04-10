import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgEyeDropper = (
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
            d='m16.607 3.414-2.121 2.122 2.828 2.828 2.121-2.121a2 2 0 1 0-2.828-2.829Z'
        />
        <path
            fill='currentColor'
            d='m8.586 11.435 5.9-5.9 2.828 2.829-5.9 5.9a4 4 0 0 1-2.828 1.17H7.414v-1.17a4 4 0 0 1 1.172-2.83Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.198 9.308 13.54 5.652a.75.75 0 0 1 1.06-1.061l3.658 3.657a.75.75 0 1 1-1.061 1.06Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M7.737 20.131c0 1.377-.836 1.87-1.868 1.87S4 21.506 4 20.13c0-1.375 1.869-3.114 1.869-3.114s1.868 1.739 1.868 3.114Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgEyeDropper);
export default ForwardRef;
