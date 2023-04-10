import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgLoadingDashed = (
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
            d='M12 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm0 17a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM4.398 4.398a.75.75 0 0 1 1.061 0L7.58 6.52a.75.75 0 1 1-1.06 1.06L4.398 5.46a.75.75 0 0 1 0-1.06ZM16.42 16.42a.75.75 0 0 1 1.06 0l2.122 2.12a.75.75 0 0 1-1.061 1.061l-2.122-2.121a.75.75 0 0 1 0-1.06ZM22.75 12a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75Zm-17 0a.75.75 0 0 1-.75.75H2a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75Z'
            clipRule='evenodd'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M19.601 4.398a.75.75 0 0 1 0 1.061l-2.12 2.121a.75.75 0 0 1-1.062-1.06l2.122-2.122a.75.75 0 0 1 1.06 0Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M7.58 16.42a.75.75 0 0 1 0 1.06l-2.12 2.122a.75.75 0 1 1-1.061-1.061l2.121-2.122a.75.75 0 0 1 1.06 0Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgLoadingDashed);
export default ForwardRef;
