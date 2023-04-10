import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgReplay = (
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
            d='M12 2.75A9.25 9.25 0 1 0 21.25 12a.75.75 0 0 1 1.5 0c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12 6.063 1.25 12 1.25a10.72 10.72 0 0 1 7.707 3.256l.581-1.743a.75.75 0 1 1 1.424.474l-1 3a.75.75 0 0 1-1.312.213 9.235 9.235 0 0 0-7.4-3.7Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='m11.17 9.085 3.147 1.573c1.105.553 1.105 2.13 0 2.684l-3.146 1.573A1.5 1.5 0 0 1 9 13.573v-3.146a1.5 1.5 0 0 1 2.17-1.342Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgReplay);
export default ForwardRef;
