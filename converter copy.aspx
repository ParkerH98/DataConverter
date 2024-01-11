<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="converter.aspx.cs" Inherits="parkerhague.com.converter" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">

    <title>Data Converter</title>

    <!-- Required meta tags -->
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta http-equiv="content-script-type" content="text/javascript" />
    <meta http-equiv="content-style-type" content="text/css" />
    <meta http-equiv="content-language" content="nl" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="author" content="Parker Hague" />
    <meta name="description"
        content="Data converter able to convert multiple data types at once. Created by Parker Hague" />
    <meta name="keywords"
        content="Parker Hague, Data Converter, software developer, OSU, data type, Oklahoma State, Data Converter, Data Conversion, ParkerH98, Algorithms, JavaScript, Oklahoma State University, bit, megabyte, terrabyte, gigabyte" />
    <meta name="robots" content="index, follow" />
    <meta name="revisit-after" content="7 days" />

    <%-- Bootstrap --%>
    <script src="../Content/Scripts/jquery-3.5.1.min.js"></script>
    <script src="../Content/Scripts/bootstrap.min.js"></script>
    <link href="../Content/Bootstrap/bootstrap.min.css" rel="stylesheet" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <%-- main stylesheet --%>
    <link href="../../Content/CSS/converter_styles.css" rel="stylesheet" />

    <%-- Google Fonts --%>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap" rel="stylesheet" />

    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="../Content/Images/Favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../Content/Images/Favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../Content/Images/Favicon/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
</head>
<body>
    <form id="form1" runat="server">

        <%-- overall page container --%>
        <div class="container-fluid p-0">

            <%-- nav container --%>
            <div id="naver" class="container-fluid p-0">

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="../resume.aspx">Parker Hague's Resume</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

                        <ul class="navbar-nav ml-auto">

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="https://www.parkerhague.com/#projects" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="https://www.parkerhague.com/converter">Data Converter</a>
                                    </li>
                                    <li><a class="dropdown-item" href="#">IOS App</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="https://github.com/ParkerH98">GitHub</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.parkerhague.com/#skills">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.parkerhague.com/#experiences">Experience</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="https://www.parkerhague.com/resume.aspx">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <%-- input label --%>
            <div class="row input-label">

                <div class="col-sm-4 offset-sm-4">
                    <asp:Label CssClass="col-form-label font-weight-bold" ID="lblinput" runat="server"
                        Text="Enter a Number to Convert"></asp:Label>
                </div>
            </div>

            <!-- text input row -->
            <div class="row input-margin">
                <div class="col-sm-4 ">
                    <div class="text-center">
                        <button id="help" class="btn btn-secondary bg-dark" aria-hidden="true" type="button" data-toggle="collapse"
                        data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Click here for help</button>
                    </div>

                    <div class="collapse" id="collapseExample">
                        <div class="card card-body">
                            Type the number you wish to convert into the input box. Then, hover over the unit that
                            you're converting from. <br><br> Ex. I want to convert 256 kilobytes to bytes. This shows
                            that 256 KB equals 262,144 B.
                            <img src="data_ex.png" class="d-block w-100" alt="...">
                        </div>
                    </div>
                </div>

                <div class="col-sm-4">
                    
                    <asp:TextBox CssClass="form-control" ID="conversionInput" runat="server"></asp:TextBox>
                </div>
            </div>

            <%-- container for all buttons --%>
            <div class="container container-padding mx-auto">

                <%-- first conversion row --%>
                <div class="row">

                    <%-- Bit conversion --%>
                    <div class="col-sm-3 text-center btn convertBtn" id="Bit" >
                        <asp:Label CssClass="d-block font-weight-bold type-label" ID="typeBit" runat="server" Text="Bit">
                        </asp:Label>
                        <asp:Label CssClass="d-block height wrap" ID="conversionBit" runat="server"></asp:Label>
                    </div>

                    <%-- Nibble conversion --%>
                    <div class="col-sm-3 text-center btn convertBtn" id="Nibble" >
                        <asp:Label CssClass="d-block font-weight-bold type-label" ID="typeNibble" runat="server" Text="Nibble">
                        </asp:Label>
                        <asp:Label CssClass="d-block height wrap" ID="conversionNibble" runat="server"></asp:Label>
                    </div>

                    <%-- Byte conversion --%>
                    <div class="col-sm-3 text-center btn convertBtn" id="Byte" >
                        <asp:Label CssClass="d-block font-weight-bold type-label" ID="typeByte" runat="server" Text="Byte">
                        </asp:Label>
                        <asp:Label CssClass="d-block height wrap" ID="conversionByte" runat="server"></asp:Label>
                    </div>

                    <%-- Word conversion --%>
                    <div class="col-sm-3 text-center btn convertBtn" id="Word" >
                        <asp:Label CssClass="d-block font-weight-bold type-label" ID="typeWord" runat="server" Text="Word">
                        </asp:Label>
                        <asp:Label CssClass="d-block height wrap" ID="conversionWord" runat="server"></asp:Label>
                    </div>
                </div>

                <%-- second conversion row --%>
                <div class="row">

                    <%-- Kilobyte conversion --%>
                    <div class="col-sm-3 text-center btn convertBtn" id="Kilobyte" >
                        <asp:Label CssClass="d-block font-weight-bold type-label" ID="typeKilobyte" runat="server" Text="Kilobyte">
                        </asp:Label>
                        <asp:Label CssClass="d-block height wrap" ID="conversionKilobyte" runat="server"></asp:Label>
                    </div>

                    <%-- Megabyte conversion --%>
                    <div class="col-sm-3 text-center btn convertBtn" id="Megabyte" >
                        <asp:Label CssClass="d-block font-weight-bold type-label" ID="typeMegabyte" runat="server" Text="Megabyte">
                        </asp:Label>
                        <asp:Label CssClass="d-block height wrap" ID="conversionMegabyte" runat="server"></asp:Label>
                    </div>

                    <%-- Gigabyte conversion --%>
                    <div class="col-sm-3 text-center btn convertBtn" id="Gigabyte" >
                        <asp:Label CssClass="d-block font-weight-bold type-label" ID="typeGigabyte" runat="server" Text="Gigabyte">
                        </asp:Label>
                        <asp:Label CssClass="d-block height wrap" ID="conversionGigabyte" runat="server"></asp:Label>
                    </div>

                    <%-- Terrabyte conversion --%>
                    <div class="col-sm-3 text-center btn convertBtn" id="Terrabyte" >
                        <asp:Label CssClass="d-block font-weight-bold type-label" ID="typeTerrabyte" runat="server"
                            Text="Terrabyte"></asp:Label>
                        <asp:Label CssClass="d-block height wrap" ID="conversionTerrabyte" runat="server"></asp:Label>
                    </div>
                </div>

                <%-- third conversion row --%>
                <div class="row">

                    <%-- Petabyte conversion --%>
                    <div class="col-sm-3 text-center btn convertBtn" id="Petabyte" >
                        <asp:Label CssClass="d-block font-weight-bold type-label" ID="typePetabyte" runat="server" Text="Petabyte">
                        </asp:Label>
                        <asp:Label CssClass="d-block height wrap" ID="conversionPetabyte" runat="server"></asp:Label>
                    </div>

                    <%-- Exabyte conversion --%>
                    <div class="col-sm-3 text-center btn convertBtn" id="Exabyte" >
                        <asp:Label CssClass="d-block font-weight-bold type-label" ID="typeExabyte" runat="server" Text="Exabyte">
                        </asp:Label>
                        <asp:Label CssClass="d-block height wrap" ID="conversionExabyte" runat="server"></asp:Label>
                    </div>

                    <%-- Zettabyte conversion --%>
                    <div class="col-sm-3 text-center btn convertBtn" id="Zettabyte" >
                        <asp:Label CssClass="d-block font-weight-bold type-label" ID="typeZettabyte" runat="server"
                            Text="Zettabyte"></asp:Label>
                        <asp:Label CssClass="d-block height wrap" ID="conversionZettabyte" runat="server"></asp:Label>
                    </div>

                    <%-- Yottabyte conversion --%>
                    <div class="col-sm-3 text-center btn convertBtn" id="Yottabyte" >
                        <asp:Label CssClass="d-block font-weight-bold type-label" ID="typeYottabyte" runat="server"
                            Text="Yottabyte"></asp:Label>
                        <asp:Label CssClass="d-block height wrap" ID="conversionYottabyte" runat="server"></asp:Label>
                    </div>
                </div>
            </div>
        </div>

        <script src="converter.js"></script>
    </form>
</body>
