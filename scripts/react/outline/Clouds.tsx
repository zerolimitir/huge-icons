import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgClouds = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M15.787 2.281a6.405 6.405 0 0 0-4.71 2.822l-.24.363-.249-.036c-.412-.06-1.272-.008-1.728.105-1.567.389-2.863 1.56-3.357 3.032-.115.344-.223.822-.223.989 0 .103-.037.13-.457.335-1.842.899-3.075 2.491-3.47 4.48-.116.582-.124 1.567-.017 2.169a7.13 7.13 0 0 0 .566 1.707A6.325 6.325 0 0 0 6.233 21.6c.707.154 1.093.166 4.827.15 3.5-.015 3.61-.017 3.944-.099 1.074-.264 1.952-.787 2.617-1.56a4.605 4.605 0 0 0 .588-5.181c-.101-.192-.175-.355-.166-.362.009-.007.191-.069.404-.138 1.303-.422 2.503-1.34 3.28-2.51a6.689 6.689 0 0 0 .936-2.36c.097-.541.098-1.534.001-2.08-.398-2.262-2.03-4.138-4.243-4.879a7.098 7.098 0 0 0-2.634-.3m1.4 1.539c1.27.206 2.455.932 3.173 1.946.253.355.573.993.679 1.352a4.71 4.71 0 0 1-.257 3.394 4.818 4.818 0 0 1-3.558 2.666c-.472.083-.47.083-.721-.078-.331-.211-.878-.439-1.345-.558-.472-.121-1.315-.175-1.745-.112l-.248.036-.259-.383a6.215 6.215 0 0 0-2.448-2.154 6.31 6.31 0 0 0-3.184-.662l-.438.025.098-.26c.196-.52.44-.886.841-1.261 1.214-1.136 3.105-1.16 4.403-.055.275.235.442.301.687.273.488-.054.792-.583.601-1.042-.07-.166-.481-.539-.856-.777-.16-.101-.29-.197-.29-.213 0-.068.398-.559.663-.819A4.972 4.972 0 0 1 15.6 3.821a5.857 5.857 0 0 1 1.587-.001M8.36 10.818a4.92 4.92 0 0 1 2.657 1.32c.265.26.663.751.663.819 0 .016-.131.112-.292.214-.372.235-.823.648-.894.816-.158.379.015.796.406.977.303.14.555.07.94-.261a3.3 3.3 0 0 1 4.41.091 3.068 3.068 0 0 1 .977 2.478c-.029.467-.107.77-.298 1.157a3.261 3.261 0 0 1-2.169 1.729c-.329.079-.463.081-3.985.082-4.046 0-3.968.004-4.785-.267-1.196-.397-2.181-1.267-2.755-2.431a4.473 4.473 0 0 1-.475-2.037c.001-2.069 1.353-3.89 3.36-4.523a5.184 5.184 0 0 1 2.24-.164'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgClouds);
export default ForwardRef;