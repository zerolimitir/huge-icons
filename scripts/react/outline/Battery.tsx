import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBattery = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M9.815 1.278c-.484.115-.717.726-.432 1.13a.939.939 0 0 0 .277.248c.155.082.22.084 2.215.096 2.333.013 2.406.007 2.644-.231.399-.399.212-1.098-.33-1.235-.209-.052-4.158-.06-4.374-.008m-2.155 2A2.76 2.76 0 0 0 5.352 5.26l-.092.32v14.84l.092.32a2.797 2.797 0 0 0 1.908 1.908l.32.092h8.84l.32-.092a2.797 2.797 0 0 0 1.908-1.908l.092-.32V5.58l-.092-.32a2.818 2.818 0 0 0-1.888-1.906l-.3-.091-4.28-.007c-2.354-.004-4.388.006-4.52.022m8.794 1.563c.29.109.596.415.705.705.08.215.081.28.081 7.454 0 7.174-.001 7.239-.081 7.454-.109.29-.415.596-.705.705-.213.08-.294.081-4.454.081s-4.241-.001-4.454-.081a1.337 1.337 0 0 1-.705-.706c-.081-.217-.082-.256-.071-7.526l.01-7.307.087-.162c.157-.293.484-.573.773-.661.055-.016 2.012-.032 4.348-.034 4.176-.003 4.253-.002 4.466.078'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBattery);
export default ForwardRef;
