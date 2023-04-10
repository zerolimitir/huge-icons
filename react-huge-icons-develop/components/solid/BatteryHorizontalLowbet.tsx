import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBatteryHorizontalLowbet = (
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
            d='M2.47 2.47a.75.75 0 0 1 1.06 0L7.06 6l11.805 11.804 2.665 2.666a.75.75 0 1 1-1.06 1.06L16.94 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h.94L2.47 3.53a.75.75 0 0 1 0-1.06ZM22 9.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM20 8v8c0 .277-.056.541-.158.781L9.06 6H18a2 2 0 0 1 2 2Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBatteryHorizontalLowbet);
export default ForwardRef;
