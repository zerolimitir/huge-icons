import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBellSchool = (
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
            d='M10.5 2c3.42 0 6.37 2.02 7.718 4.933a4 4 0 0 0 .077 6.963 8.506 8.506 0 0 1-7.046 5.071l.001.033v2.224c4.823-.332 8.77-3.845 9.76-8.457a2.5 2.5 0 1 1 1.715-2.459.748.748 0 0 1 .025.192c0 6.765-5.485 12.25-12.25 12.25a.75.75 0 0 1-.75-.75v-3.033A8.5 8.5 0 0 1 10.5 2Zm0 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBellSchool);
export default ForwardRef;
