import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
    title?: string;
    titleId?: string;
}
const SvgSpeaker = (
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
            d='M18.375 9.618a.75.75 0 1 0-.75 1.299l.75-1.299Zm-.75 3.465a.75.75 0 0 0 .75 1.299l-.75-1.299Zm.524-6.718a.75.75 0 0 0-.298 1.47l.298-1.47Zm-.298 9.8a.75.75 0 1 0 .298 1.47l-.298-1.47ZM7.533 7.602l.45.6-.45-.6ZM11.8 4.403l-.45-.6.45.6Zm0 15.194.45-.6-.45.6Zm-4.267-3.2.45-.6-.45.6Zm10.091-5.48c.376.217.626.621.626 1.083h1.5a2.75 2.75 0 0 0-1.375-2.382l-.75 1.299ZM18.25 12c0 .462-.25.866-.625 1.083l.75 1.299A2.75 2.75 0 0 0 19.75 12h-1.5Zm-.4-4.165c1.94.394 3.4 2.11 3.4 4.165h1.5a5.752 5.752 0 0 0-4.6-5.635l-.3 1.47ZM21.25 12a4.252 4.252 0 0 1-3.4 4.165l.3 1.47A5.752 5.752 0 0 0 22.75 12h-1.5ZM7.983 8.202l4.267-3.198-.9-1.2-4.267 3.198.9 1.2Zm6.267-2.2v11.995h1.5V6.003h-1.5Zm-2 12.995-4.267-3.2-.9 1.201 4.267 3.199.9-1.2Zm2-1c0 1.029-1.176 1.618-2 1l-.9 1.2c1.813 1.358 4.4.066 4.4-2.2h-1.5Zm-2-12.993c.824-.619 2-.03 2 .999h1.5c0-2.266-2.588-3.558-4.4-2.2l.9 1.2ZM6.334 7.252H4v1.5h2.334v-1.5ZM1.25 10v3.998h1.5V10h-1.5ZM4 16.748h2.334v-1.5H4v1.5ZM1.25 14A2.75 2.75 0 0 0 4 16.75v-1.5c-.69 0-1.25-.56-1.25-1.25h-1.5ZM4 7.252A2.75 2.75 0 0 0 1.25 10h1.5c0-.69.56-1.25 1.25-1.25v-1.5Zm3.983 8.546a2.75 2.75 0 0 0-1.65-.55v1.5c.271 0 .534.088.75.25l.9-1.2Zm-.9-8.796a1.25 1.25 0 0 1-.75.25v1.5a2.75 2.75 0 0 0 1.65-.55l-.9-1.2Z'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpeaker);
export default ForwardRef;
