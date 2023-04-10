import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgInternet = (
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
            d='M12 13.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75ZM21.25 19a.75.75 0 0 1-.75.75H14a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 .75.75Zm-10 0a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h6.5a.75.75 0 0 1 .75.75Zm.75.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Z'
            clipRule='evenodd'
        />
        <path
            fill='currentColor'
            d='M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Zm-4 11a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z'
            opacity={0.4}
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.953 8.75h-2.962c-.043 1.77-.238 3.407-.548 4.732a6.006 6.006 0 0 0 3.51-4.732Zm-5.384 5.223a8.5 8.5 0 0 0 .198-.632c.317-1.164.539-2.768.587-4.59h-2.708c.048 1.822.27 3.426.587 4.59a8.5 8.5 0 0 0 .198.632 6.083 6.083 0 0 0 1.138 0Zm-3.012-.491c-.31-1.325-.505-2.962-.548-4.732H6.046a6.006 6.006 0 0 0 3.51 4.732ZM12 2a6 6 0 0 0-5.954 5.25H9.01c.043-1.77.238-3.407.548-4.731a5.962 5.962 0 0 1 1.874-.492 8.492 8.492 0 0 0-.198.633c-.317 1.163-.539 2.767-.587 4.59h2.708c-.048-1.823-.27-3.427-.587-4.59a8.492 8.492 0 0 0-.198-.633 5.962 5.962 0 0 1 1.874.492c.31 1.324.505 2.96.548 4.731h2.963A6 6 0 0 0 12 2Z'
            clipRule='evenodd'
            opacity={0.4}
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInternet);
export default ForwardRef;
