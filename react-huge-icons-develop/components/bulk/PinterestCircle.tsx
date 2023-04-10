import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgPinterestCircle = (
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
        <circle cx={12} cy={12} r={10} fill='currentColor' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 7.75a4.25 4.25 0 0 0-3.682 6.374.75.75 0 1 1-1.298.752 5.75 5.75 0 1 1 3.652 2.72L9.594 21.69a.75.75 0 0 1-1.45-.382l2.63-10a.75.75 0 0 1 1.451.382l-1.171 4.453A4.25 4.25 0 1 0 12 7.75Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgPinterestCircle);
export default ForwardRef;
