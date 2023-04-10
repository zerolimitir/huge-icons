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
            d='M15 15h-3V8a7 7 0 1 0 5.362 11.5l.142-.208L15 15Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M12 6.25a.75.75 0 0 1 .75.75v7.25H15a.75.75 0 0 1 .648.372l3.283 5.628H20a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.648-.372L14.57 15.75H12a.75.75 0 0 1-.75-.75V7a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' />
    </svg>
);
const ForwardRef = forwardRef(SvgWheelChairHuman);
export default ForwardRef;
