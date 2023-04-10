import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgBrightness = (
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
            d='M12 2a.75.75 0 0 1 .75.75v1a.75.75 0 1 1-1.5 0v-1A.75.75 0 0 1 12 2Zm6 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-5.25 8.25a.75.75 0 1 0-1.5 0v1a.75.75 0 0 0 1.5 0v-1ZM3.34 7a.75.75 0 0 1 1.024-.274l.866.5a.75.75 0 1 1-.75 1.299l-.866-.5A.75.75 0 0 1 3.34 7Zm16.18 8.476a.75.75 0 0 0-.75 1.298l.866.5a.75.75 0 0 0 .75-1.299l-.866-.5ZM20.66 7a.75.75 0 0 1-.274 1.024l-.866.5a.75.75 0 0 1-.75-1.299l.866-.5A.75.75 0 0 1 20.66 7ZM5.23 16.774a.75.75 0 1 0-.75-1.299l-.866.5a.75.75 0 1 0 .75 1.3l.866-.5Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBrightness);
export default ForwardRef;
