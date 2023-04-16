import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgRoadPin = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.44 2.058c-.643.138-1.073.373-1.542.841-.608.607-.876 1.251-.876 2.101 0 .554.066.834.318 1.347.344.7 1.131 1.37 1.776 1.512l.124.027v2.087c0 1.399.015 2.139.045 2.246.059.213.293.441.513.5.4.108.812-.12.92-.51.026-.094.042-.922.042-2.231V7.896l.23-.07c.402-.124.726-.335 1.11-.722.5-.505.701-.873.843-1.544.184-.864-.085-1.844-.697-2.54-.349-.396-.97-.781-1.49-.923-.315-.086-1.001-.107-1.316-.039M7.905 4.063a2.02 2.02 0 0 0-1.199.864c-.094.145-.879 2.189-2.47 6.433l-2.333 6.22.002.42c.001.341.018.465.094.66a2.03 2.03 0 0 0 1.426 1.28c.203.053 1.268.06 8.575.06 7.307 0 8.372-.007 8.575-.06.972-.253 1.617-1.147 1.528-2.118-.021-.229-.186-.706-.947-2.738a215.935 215.935 0 0 0-.945-2.498c-.012-.021-.061.069-.108.199a2.282 2.282 0 0 1-1.545 1.396c-.28.074-.836.074-1.116 0a2.304 2.304 0 0 1-1.56-1.42l-.101-.261-.013-1.803-.012-1.802-.128-.075c-1.038-.602-1.888-1.889-2.07-3.136-.048-.329-.032-1.332.025-1.574l.026-.11-2.734.003c-2.217.003-2.779.014-2.97.06m4.5 2.318c.08.051.188.162.24.246.091.146.095.184.095.88v.726l-.121.172c-.166.236-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172v-.726c0-.691.005-.734.093-.876.233-.375.691-.484 1.052-.25m-.113 4.433c.155.065.375.305.417.457.017.06.031.388.031.729 0 .341-.014.669-.031.729-.042.152-.262.392-.417.457a.85.85 0 0 1-.584 0c-.155-.065-.375-.305-.417-.457-.017-.06-.031-.388-.031-.729 0-.341.014-.669.031-.729.041-.147.259-.39.408-.455a.881.881 0 0 1 .593-.002m.113 4.567c.08.051.188.162.24.246.091.146.095.184.095.88v.726l-.121.172c-.166.236-.346.334-.619.334s-.453-.098-.619-.334l-.121-.172v-.726c0-.691.005-.734.093-.876.233-.375.691-.484 1.052-.25'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgRoadPin);
export default ForwardRef;