import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSignalCellularNoInternetDashed = (
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
            d='M20 3.25a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75Zm-6 4a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75ZM8.75 12a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-8ZM2 15.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75ZM21.06 18l1.47-1.47a.75.75 0 1 0-1.06-1.06L20 16.94l-1.47-1.47a.75.75 0 1 0-1.06 1.06L18.94 18l-1.47 1.47a.75.75 0 1 0 1.06 1.06L20 19.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L21.06 18Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignalCellularNoInternetDashed);
export default ForwardRef;
