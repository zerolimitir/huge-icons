import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpringNotesEditDelete = (
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
            d='M18.424 12.99a1.674 1.674 0 0 1 2.367 2.367l-5.014 5.015c-.121.12-.27.209-.434.255l-2.197.627a.5.5 0 0 1-.618-.618l.626-2.197c.047-.164.135-.313.256-.434l5.014-5.015Z'
        />
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M9.032 1.5a.75.75 0 0 0-1.5 0V3h-.25a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h.586a1 1 0 0 0 .707-.293L20.989 8.793a1 1 0 0 0 .293-.707V7a4 4 0 0 0-4-4h-.25V1.5a.75.75 0 1 0-1.5 0V3h-6.5V1.5Zm5.194 8.116a.75.75 0 0 0-1.06-1.06l-.884.883-.884-.884a.75.75 0 0 0-1.06 1.061l.883.884-.884.884a.75.75 0 0 0 1.06 1.06l.885-.883.884.883a.75.75 0 0 0 1.06-1.06l-.884-.884.884-.884Z'
            clipRule='evenodd'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpringNotesEditDelete);
export default ForwardRef;
