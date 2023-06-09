import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSignpostBig = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.24 3.036c-.309.099-.591.358-.683.629a2.076 2.076 0 0 0-.055.495l-.002.34h3l-.002-.34c-.003-.409-.061-.599-.25-.808-.273-.302-.373-.331-1.188-.34-.396-.005-.765.006-.82.024m-6.26 2.58c-.153.072-.464.361-1.326 1.229-1.058 1.066-1.13 1.148-1.19 1.352-.08.271-.08.335 0 .606.06.204.131.285 1.209 1.368.787.791 1.202 1.179 1.326 1.24l.181.089h6c4.98 0 6.026-.009 6.155-.055.217-.077.461-.309.571-.545l.093-.2V6.3l-.093-.2a1.146 1.146 0 0 0-.532-.525c-.11-.046-1.135-.055-6.163-.055l-6.031.001-.2.095m5.509 7.394.011.49h3l.011-.49.011-.49h-3.044l.011.49m-3.872 1.567a1.156 1.156 0 0 0-.523.523l-.093.2v4.4l.093.2c.11.236.354.468.571.545.129.046 1.175.055 6.155.055h6l.182-.091c.125-.062.542-.452 1.326-1.24 1.077-1.081 1.148-1.162 1.208-1.366.08-.271.08-.335 0-.606-.06-.204-.132-.286-1.19-1.352-.862-.868-1.173-1.157-1.326-1.229l-.2-.095-6.04.001c-4.959.001-6.062.011-6.163.055m3.872 7.293c.032.553.203.841.611 1.035.187.088.247.094.9.094s.713-.006.9-.094c.408-.194.579-.482.611-1.035l.02-.35h-3.062l.02.35'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSignpostBig);
export default ForwardRef;
