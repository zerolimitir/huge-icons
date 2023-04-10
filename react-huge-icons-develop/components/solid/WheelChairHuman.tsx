import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgWheelChairHuman = (
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
            d='M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.75 2.75H15a.75.75 0 0 0 0-1.5h-3a7.75 7.75 0 1 0 5.384 13.325l.468.803a.75.75 0 0 0 .648.372H20a.75.75 0 0 0 0-1.5h-1.07l-3.282-5.628A.75.75 0 0 0 15 14.25h-2.25v-5.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgWheelChairHuman);
export default ForwardRef;
