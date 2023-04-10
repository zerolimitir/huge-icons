import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgAppsCircle = (
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
        <circle cx={7} cy={7} r={3} fill='currentColor' opacity={0.4} />
        <circle cx={17} cy={17} r={3} fill='currentColor' />
        <circle cx={7} cy={17} r={3} fill='currentColor' opacity={0.4} />
        <circle cx={17} cy={7} r={3} fill='currentColor' opacity={0.4} />
    </svg>
);
const ForwardRef = forwardRef(SvgAppsCircle);
export default ForwardRef;
