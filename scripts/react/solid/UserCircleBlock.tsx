import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUserCircleBlock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M10.18 2.041c-3.498.35-6.436 2.614-7.636 5.883a9.04 9.04 0 0 0-.08 5.912c1.119 3.37 4.094 5.744 7.676 6.127.271.029.709.038 1.14.024.658-.022.928-.051 1.427-.15l.207-.041-.074-.215c-.171-.499-.219-.853-.219-1.641-.001-.839.033-1.085.24-1.723a5.492 5.492 0 0 1 4.296-3.713c.732-.124 1.804-.065 2.451.136l.228.07.021-.105c.129-.634.176-1.712.107-2.425a9.084 9.084 0 0 0-2.584-5.52 9.03 9.03 0 0 0-5.1-2.559c-.558-.079-1.609-.109-2.1-.06m1.576 3.056c.337.092.839.35 1.117.574C13.554 6.219 14 7.14 14 8c0 1.17-.775 2.329-1.849 2.766-1.509.614-3.162-.032-3.853-1.506-.226-.481-.277-.714-.277-1.26s.051-.779.277-1.26a3.033 3.033 0 0 1 2.205-1.7c.267-.049.988-.016 1.253.057m.362 7.226c.25.041.463.189.574.4.11.209.079.583-.066.772-.211.277-.237.283-1.466.287-.855.003-1.185.019-1.48.073-.878.159-1.49.357-2.332.755-.548.259-.607.278-.779.255a.76.76 0 0 1-.57-1.103c.102-.199.212-.275.82-.566 1.089-.521 2.299-.831 3.641-.931.292-.022 1.404.017 1.658.058m5.402 1.702c-.538.07-1.305.358-1.747.658a3.988 3.988 0 0 0-1.762 3.497c.03.659.22 1.309.538 1.834l.142.235 2.775-2.775c2.52-2.52 2.768-2.779 2.704-2.829-.17-.133-.9-.449-1.21-.524-.334-.082-1.135-.135-1.44-.096m1.006 4.509-2.775 2.775.235.141c.319.194.67.335 1.085.44.281.07.466.087.949.088.53 0 .646-.013.991-.108 2.474-.686 3.685-3.351 2.567-5.65a2.985 2.985 0 0 0-.207-.37l-.071-.09-2.774 2.774'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserCircleBlock);
export default ForwardRef;