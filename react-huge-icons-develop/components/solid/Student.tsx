import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgStudent = (
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
            d='M18.5 11.5V6H20v5.5a.75.75 0 0 1-1.5 0Z'
            clipRule='evenodd'
        />
        <path fill='currentColor' d='M16 10V7H8v3a4 4 0 0 0 8 0Z' />
        <path
            fill='currentColor'
            d='m4.028 5.543 6.754-3.001a3 3 0 0 1 2.437 0l6.753 3.001a.5.5 0 0 1 0 .914L13.218 9.46a3 3 0 0 1-2.436 0L4.028 6.457a.5.5 0 0 1 0-.914ZM14.3 15.4l-1.589 1.606a1 1 0 0 1-1.422 0L9.7 15.4a.948.948 0 0 0-.938-.256C5.957 15.97 4 17.834 4 20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2c0-2.167-1.957-4.03-4.762-4.856a.948.948 0 0 0-.938.256Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgStudent);
export default ForwardRef;
