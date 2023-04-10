import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUsersDouble = (
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
        <circle cx={15} cy={8} r={3} fill='currentColor' opacity={0.4} />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16.115 18.948c.564-.576.885-1.24.885-1.948 0-1.701-1.859-3.155-4.479-3.733a11.262 11.262 0 0 1 2.48-.267c3.313 0 6 1.343 6 3 0 1.466-2.105 2.687-4.886 2.948Z'
            clipRule='evenodd'
        />
        <ellipse cx={10} cy={17} fill='currentColor' opacity={0.4} rx={7} ry={4} />
        <circle cx={10} cy={7} r={4} fill='currentColor' />
    </svg>
);
const ForwardRef = forwardRef(SvgUsersDouble);
export default ForwardRef;
