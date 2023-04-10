import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgMusic = (
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
            d='m18.367 8.878-.237-.712.238.712Zm-6.632 2.21.237.712-.237-.712ZM20.25 12a.75.75 0 0 0 1.5 0h-1.5Zm-1.883-9.122.238.711-.238-.711Zm-6.632 2.21-.237-.711.237.711ZM8.25 14a.75.75 0 0 0 1.5 0h-1.5Zm12 3A2.25 2.25 0 0 1 18 19.25v1.5A3.75 3.75 0 0 0 21.75 17h-1.5ZM18 19.25A2.25 2.25 0 0 1 15.75 17h-1.5A3.75 3.75 0 0 0 18 20.75v-1.5ZM15.75 17A2.25 2.25 0 0 1 18 14.75v-1.5A3.75 3.75 0 0 0 14.25 17h1.5ZM18 14.75A2.25 2.25 0 0 1 20.25 17h1.5A3.75 3.75 0 0 0 18 13.25v1.5ZM8.25 19A2.25 2.25 0 0 1 6 21.25v1.5A3.75 3.75 0 0 0 9.75 19h-1.5ZM6 21.25A2.25 2.25 0 0 1 3.75 19h-1.5A3.75 3.75 0 0 0 6 22.75v-1.5ZM3.75 19A2.25 2.25 0 0 1 6 16.75v-1.5A3.75 3.75 0 0 0 2.25 19h1.5ZM6 16.75A2.25 2.25 0 0 1 8.25 19h1.5A3.75 3.75 0 0 0 6 15.25v1.5Zm15.75.25v-6.225h-1.5V17h1.5Zm-3.62-8.834-6.632 2.21.474 1.424 6.633-2.21-.475-1.424Zm-9.88 6.717V19h1.5v-4.117h-1.5Zm3.248-4.506a4.75 4.75 0 0 0-3.248 4.506h1.5a3.25 3.25 0 0 1 2.222-3.083l-.474-1.423Zm10.252.398a2.75 2.75 0 0 0-3.62-2.609l.475 1.423a1.25 1.25 0 0 1 1.645 1.186h1.5Zm0 1.225V4.775h-1.5V12h1.5Zm-3.62-9.834-6.632 2.21.474 1.424 6.633-2.21-.475-1.424ZM8.25 8.883V14h1.5V8.883h-1.5Zm3.248-4.506A4.75 4.75 0 0 0 8.25 8.883h1.5A3.25 3.25 0 0 1 11.972 5.8l-.474-1.423Zm10.252.398a2.75 2.75 0 0 0-3.62-2.609l.475 1.423a1.25 1.25 0 0 1 1.645 1.186h1.5Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusic);
export default ForwardRef;
