import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMicMute = (
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
            d='M12 1.75a5 5 0 0 1 5 5v6l-9-9a4.992 4.992 0 0 1 4-2ZM7 7.81v5.94a5 5 0 0 0 8.974 3.035l1.6 1.6A7.25 7.25 0 0 1 4.75 13.75v-2a.75.75 0 0 0-1.499 0v2a8.75 8.75 0 0 0 15.39 5.7l1.83 1.83a.75.75 0 1 0 1.06-1.06l-18-18a.75.75 0 0 0-1.06 1.06L7 7.81ZM20 11a.75.75 0 0 1 .75.75v2c0 .675-.076 1.333-.222 1.965a.75.75 0 0 1-1.462-.335c.12-.524.184-1.069.184-1.63v-2A.75.75 0 0 1 20 11Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMicMute);
export default ForwardRef;
