import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgCameraVideoSilent = (
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
            d='M2 8a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            d='M17 10.915a4 4 0 0 1 1.082-2.736l.459-.49C19.78 6.368 22 7.246 22 9.059v5.885c0 1.813-2.219 2.69-3.46 1.367l-.458-.49A4 4 0 0 1 17 13.086v-2.17ZM6 20h7a4 4 0 0 0 3.627-2.312l4.843 4.842a.75.75 0 1 0 1.06-1.06l-20-20a.75.75 0 0 0-1.06 1.06l2.21 2.211A3.995 3.995 0 0 0 2 8v8a4 4 0 0 0 4 4Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCameraVideoSilent);
export default ForwardRef;
