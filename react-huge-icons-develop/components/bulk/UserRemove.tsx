import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgUserRemove = (
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
        <ellipse cx={10} cy={17} fill='currentColor' opacity={0.4} rx={7} ry={4} />
        <circle cx={10} cy={7} r={4} fill='currentColor' />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M16.575 8.575a.719.719 0 0 1 1.016 0l1.41 1.408 1.408-1.408a.719.719 0 1 1 1.016 1.016l-1.408 1.41 1.408 1.408a.719.719 0 1 1-1.016 1.016L19 12.017l-1.409 1.408a.719.719 0 1 1-1.016-1.016L17.983 11l-1.408-1.409a.719.719 0 0 1 0-1.016Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserRemove);
export default ForwardRef;
