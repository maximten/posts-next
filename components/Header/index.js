import React, { Component } from 'react'
import Link from 'next/link'

import '../../styles/index.scss'

export default class Header extends Component {
    render () {
        return (
            <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link href="/">
                            <a className="navbar-brand">
                                Home
                            </a>
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}