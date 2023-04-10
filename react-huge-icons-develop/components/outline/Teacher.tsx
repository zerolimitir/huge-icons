import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgTeacher = (
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
            d='M6.25 7a.75.75 0 0 0 1.5 0h-1.5ZM15 15.25a.75.75 0 0 0 0 1.5v-1.5Zm-4-8.5a.75.75 0 0 0 0 1.5v-1.5Zm7 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4 2.5a.75.75 0 0 0 0 1.5v-1.5Zm4 1.5a.75.75 0 0 0 0-1.5v1.5ZM11.25 18v1h1.5v-1h-1.5ZM10 20.25H4v1.5h6v-1.5ZM2.75 19v-1h-1.5v1h1.5Zm7.078-2.25H10v-1.5h-.172v1.5ZM4 16.75h.172v-1.5H4v1.5Zm1.055.366a2.75 2.75 0 0 0 3.89 0l-1.061-1.06a1.25 1.25 0 0 1-1.768 0l-1.06 1.06Zm-.883-.366c.331 0 .649.132.883.366l1.061-1.06a2.75 2.75 0 0 0-1.944-.806v1.5Zm5.656-1.5c-.729 0-1.428.29-1.944.805l1.06 1.061a1.25 1.25 0 0 1 .884-.366v-1.5ZM4 20.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 4 21.75v-1.5ZM11.25 19c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 12.75 19h-1.5Zm1.5-1A2.75 2.75 0 0 0 10 15.25v1.5c.69 0 1.25.56 1.25 1.25h1.5Zm-10 0c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 1.25 18h1.5Zm5.5-6c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 9.75 12h-1.5ZM7 13.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 7 14.75v-1.5ZM5.75 12c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 4.25 12h1.5ZM7 10.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 7 9.25v1.5ZM7.75 7V5h-1.5v2h1.5ZM9 3.75h11v-1.5H9v1.5ZM21.25 5v9h1.5V5h-1.5ZM20 15.25h-5v1.5h5v-1.5ZM21.25 14c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 22.75 14h-1.5ZM20 3.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 20 2.25v1.5ZM7.75 5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 6.25 5h1.5ZM11 8.25h7v-1.5h-7v1.5Zm3 4h4v-1.5h-4v1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTeacher);
export default ForwardRef;
