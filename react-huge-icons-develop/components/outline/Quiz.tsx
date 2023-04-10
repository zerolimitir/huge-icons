import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgQuiz = (
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
            d='m17.373 8.173-.73.172.73-.172ZM10 9.25a.75.75 0 0 0 0 1.5v-1.5ZM7.25 8a.75.75 0 0 0 1.5 0h-1.5Zm2.528-4.25h1.11v-1.5h-1.11v1.5ZM2.75 14.25v-3.375h-1.5v3.375h1.5Zm-1.5 0c0 1.648 1.322 3 2.972 3v-1.5a1.486 1.486 0 0 1-1.472-1.5h-1.5Zm15.556-4.5c0 3.322-2.658 6-5.917 6v1.5c4.105 0 7.417-3.367 7.417-7.5h-1.5Zm-7.028-7.5c-4.719 0-8.528 3.87-8.528 8.625h1.5c0-3.944 3.155-7.125 7.028-7.125v-1.5Zm12.972 16.5v-3.375h-1.5v3.375h1.5Zm-9.639 3h6.667v-1.5H13.11v1.5Zm8.139-3c0 .837-.668 1.5-1.472 1.5v1.5c1.65 0 2.972-1.352 2.972-3h-1.5Zm-4.185-9.893a7.13 7.13 0 0 1 4.185 6.518h1.5a8.631 8.631 0 0 0-5.07-7.886l-.615 1.368ZM10.89 3.75c2.784 0 5.129 1.953 5.754 4.595L18.103 8c-.779-3.292-3.707-5.75-7.214-5.75v1.5Zm5.754 4.595c.106.45.163.92.163 1.405h1.5A7.6 7.6 0 0 0 18.102 8l-1.46.345ZM6.116 16.747c1.015 2.909 3.759 5.003 6.995 5.003v-1.5c-2.569 0-4.764-1.663-5.58-3.997l-1.415.494Zm4.773-.997H6.824v1.5h4.065v-1.5Zm-4.065 0H4.222v1.5h2.602v-1.5ZM11.25 8c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 12.75 8h-1.5Zm-2.5 0c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 7.25 8h1.5ZM10 6.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 10 5.25v1.5ZM11 13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgQuiz);
export default ForwardRef;
