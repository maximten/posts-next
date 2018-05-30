import React, { Component } from 'react'
import Link from 'next/link'

export default class Header extends Component {
    render () {
        return (
            <header>
                <Link href="/">
                    <a>
                        Home
                    </a>
                </Link>
            </header>
        )
    }
}