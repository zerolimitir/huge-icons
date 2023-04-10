import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgOpenBoxDone = (
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
            d='M15.587 3.67a.75.75 0 1 0-1.128-.988l-2.87 3.28a.25.25 0 0 1-.345.03L9.491 4.59a.75.75 0 1 0-.937 1.171l1.753 1.403a1.75 1.75 0 0 0 2.41-.214l2.87-3.28ZM4.016 6.024l7.96 3.992-1.945 2.987L2.03 8.98l1.987-2.956Zm7.96 3.992L19.99 6.05l2.026 2.988-8.02 3.965-2.021-2.987Zm-7.953 1.661v5.087a2 2 0 0 0 1.105 1.789l6 3a2 2 0 0 0 1.79 0l6-3a2 2 0 0 0 1.105-1.789v-5.087l-5.33 2.665a1.5 1.5 0 0 1-1.918-.51l-.752-1.128-.752 1.128a1.5 1.5 0 0 1-1.919.51l-5.33-2.665Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgOpenBoxDone);
export default ForwardRef;
